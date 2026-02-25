"use client";

import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { X, CheckCircle2, AlertTriangle } from "lucide-react";

interface Toast {
    id: string;
    type: "success" | "error";
    title: string;
    message: string;
}

interface ToastContextType {
    addToast: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within ToastProvider");
    return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((toast: Omit<Toast, "id">) => {
        const id = Date.now().toString();
        setToasts((prev) => [...prev, { ...toast, id }]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} onDismiss={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setIsVisible(true));
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onDismiss(toast.id), 300);
        }, 5000);
        return () => clearTimeout(timer);
    }, [toast.id, onDismiss]);

    const isSuccess = toast.type === "success";

    return (
        <div
            className={`pointer-events-auto w-[380px] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 flex items-start gap-3 transition-all duration-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                } ${isSuccess ? "bg-white" : "bg-neo-accent/10"}`}
        >
            <div className={`p-1.5 border-2 border-black shrink-0 ${isSuccess ? "bg-green-500 text-white" : "bg-neo-accent text-white"}`}>
                {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm uppercase tracking-wide">{toast.title}</h4>
                <p className="text-sm text-gray-600 mt-0.5">{toast.message}</p>
            </div>
            <button
                onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => onDismiss(toast.id), 300);
                }}
                className="shrink-0 p-1 hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
