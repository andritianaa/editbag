import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const InputGlowing = ({
                                       children,
                                       className,
                                       containerClassName,
                                       animate = true,
                                   }: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                style={{
                    backgroundSize: "400% 400%",
                }}
                className={cn(
                    "absolute inset-0 rounded-lg z-[1] opacity-60 blur-xl ",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ec83bb,transparent),radial-gradient(circle_farthest-side_at_0_0,#b664db,#ec83bb)]"
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                style={{
                    backgroundSize: "400% 400%",
                }}
                className={cn(
                    "absolute inset-0 rounded-lg z-[1] will-change-transform",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ec83bb,transparent),radial-gradient(circle_farthest-side_at_0_0,#b664db,#ec83bb)]"
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
