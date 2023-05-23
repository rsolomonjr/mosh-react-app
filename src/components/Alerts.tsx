import { ReactNode, useState } from "react"

interface Props {
  type: string;
  children: ReactNode;
}

const Alerts = ({ type, children }: Props) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      {
        showAlert && (
          <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleAlertClose}></button>
          </div>
        )
      }
    </>
  );
}
export default Alerts
