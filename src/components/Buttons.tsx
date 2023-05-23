import { ReactNode, useState } from "react";
import Alerts from "./Alerts";

interface Props {
    children: ReactNode;
}

const Buttons = ({ children }: Props) => {
    const colors = ['primary', 'danger', 'warning', 'success'];

    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [alertVisible, setAlertVisibility] = useState(false);

    const handleClick = () => {
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
        setAlertVisibility(false);
    }

    const currentColor = colors[currentColorIndex];

    return (
        <>
            <div className="mb-2">
                {currentColor === 'danger' &&
                    <Alerts type="danger">
                        Warning! Just Kidding.
                    </Alerts>}
            </div>

            <button className={`btn btn-${currentColor}`} onClick={handleClick}>
                {children}
            </button>
        </>
    )
}
export default Buttons