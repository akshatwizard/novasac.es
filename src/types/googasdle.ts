interface Window {
    google: {
        accounts: {
            id: {
                initialize: (config: {
                    client_id: string;
                    callback: (response: { credential: string }) => void;
                    auto_select?: boolean;
                    cancel_on_tap_outside?: boolean;
                }) => void;
                prompt: (momentListener?: (notification: {
                    isNotDisplayed: () => boolean;
                    isSkippedMoment: () => boolean;
                    isDismissedMoment: () => boolean;
                    getNotDisplayedReason: () => string;
                    getSkippedReason: () => string;
                    getDismissedReason: () => string;
                }) => void) => void;
                renderButton: (
                    parent: HTMLElement,
                    options: {
                        theme?: "outline" | "filled_blue" | "filled_black";
                        size?: "large" | "medium" | "small";
                        text?: "signin_with" | "signup_with" | "continue_with" | "signin";
                        shape?: "rectangular" | "pill" | "circle" | "square";
                        width?: number;
                        locale?: string;
                    }
                ) => void;
                disableAutoSelect: () => void;
                revoke: (hint: string, done: () => void) => void;
            };
        };
    };
}