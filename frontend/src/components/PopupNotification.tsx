import { useEffect } from "react";
import { NotificationTypes } from "../enums/NotificationTypes";
import success from "../../assets/img/success.svg";
import failed from "../../assets/img/failed.svg";

interface PopupNotificationProps {
    notificationType: NotificationTypes;
    children: React.ReactNode;
    onFade: () => void;
}

export function PopupNotification({ notificationType, children, onFade }: PopupNotificationProps) {

    useEffect(() => {
        setTimeout(() => {
            onFade();
        }, 2000);
    }, [onFade]);

    return (
        <div className="fixed flex w-max items-center bottom-5 left-1/2 -translate-x-1/2 px-6 py-5 gap-5 rounded-md bg-gray-700 text-white animate-popup">
            {notificationType === NotificationTypes.success &&
                <img src={success}></img>
            }

            {notificationType === NotificationTypes.error &&
                <img src={failed}></img>
            }

            {children}
        </div>
    );
}