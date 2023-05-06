import React, { useEffect, useState } from "react";
import './styles.scss';
import { typeEnumAlert } from "./types";
import { UseMainContext } from "../../context/MainContext/hooks";



const Alert = () => {

    const [showAlert, setShowAlert] = useState(false);
    const { alertData, alertRender } = UseMainContext();
    const { title, type, body, wait } = alertData;

    useEffect(() => {
        if (wait > 0) {
            setShowAlert(() => true);
            setTimeout(() => {
                setShowAlert(() => false);
            }, wait);
        }
    }, [alertRender])

    switch (type) {
        case typeEnumAlert.DEFAULT:
            return (
                <>
                    {showAlert ? (<section className="alert alert--default">
                        <h2 className="alert__title alert__title--default">
                            {title}
                        </h2>
                        <p className="alert__body alert__body--default">
                            {body}
                        </p>
                    </section>) : null}
                </>
            )

        case typeEnumAlert.ERROR:
            return (
                <>
                    {showAlert ? (<section className="alert alert--error">
                        <h2 className="alert__title alert__title--error">
                            {title}
                        </h2>
                        <p className="alert__body alert__body--error">
                            {body}
                        </p>
                    </section>) : null}

                </>
            )
        case typeEnumAlert.SUCCESS:
            return (
                <>
                    {showAlert ? (<section className="alert alert--success">
                        <h2 className="alert__title alert__title--success">
                            {title}
                        </h2>
                        <p className="alert__body alert__body--success">
                            {body}
                        </p>
                    </section>) : null}

                </>
            )
    }
};

export { Alert };