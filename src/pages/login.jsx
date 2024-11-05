import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopOpCredentials from "../components/popCredentials"; // Asegúrate de que esté correctamente exportado

const Login = () => {
    const [userLog, setUserLog] = useState("");
    const [passLog, setPassLog] = useState("");
    const [codLog, setCodLog] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setWelcomeMessage("");

        const missingFields = [];
        if (!userLog) missingFields.push("Usuario");
        if (!passLog) missingFields.push("Contraseña");
        if (!codLog) missingFields.push("Código");

        if (missingFields.length > 0) {
            window.alert(`Por favor, complete los siguientes campos: ${missingFields.join(", ")}`);
            return;
        }

        try {
            const response = await fetch("https://technical-test-rod-backend.vercel.app/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userLog, passLog, codLog }),
            });

            const data = await response.json();

            if (response.ok) {
                setWelcomeMessage(`Bienvenido, ${data.Bienvenido}`);
                navigate("/account");
            } else {
                setErrorMessage(data.message);
                window.alert("UPS CREDENCIALES INCORRECTAS");
            }
        } catch (error) {
            setErrorMessage("Ups, CREDENCIALES INCORRECTA!");
            console.error("Error en la conexión:", error);
        }
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#003366] p-4 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Warning Message */}
            <div className="max-w-md">
                <div className="border-2 border-yellow-400 p-6 rounded-lg">
                    <div className="items-start gap-4 h-[55vh]">
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRydNBAEWltQ5zXEoACo7r_DmGTecvzxQE4A&s" alt="" />
                        </div>
                        <p className="text-[white] leading-relaxed">
                            Nunca compartas tu información personal ni contraseñas de seguridad,{" "}
                            <span className="font-bold">Banco Industrial</span> no solicita esta
                            información por ningún medio.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
                <div className="flex justify-center mb-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_Banco_Industrial_Guatemala.svg/512px-Logo_Banco_Industrial_Guatemala.svg.png"
                        alt="Banco Industrial Logo"
                        width={150}
                        height={60}
                        className="h-12 w-auto"
                    />
                </div>

                <div className="bg-[#003366] text-white p-4 rounded-t-lg">
                    <h2 className="text-lg font-semibold">Banca de Personas</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 p-4">
                    <div>
                        <label className="text-sm text-gray-600">Código</label>
                        <input
                            type="text"
                            placeholder="Código"
                            className="mt-1 w-full p-2 border rounded"
                            value={codLog}
                            onChange={(e) => setCodLog(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Usuario</label>
                        <input
                            type="text"
                            placeholder="Usuario"
                            className="mt-1 w-full p-2 border rounded"
                            value={userLog}
                            onChange={(e) => setUserLog(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="mt-1 w-full p-2 border rounded"
                            value={passLog}
                            onChange={(e) => setPassLog(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="w-full bg-[#45B7B8] hover:bg-[#3a9a9b] text-white py-2 rounded">
                        Iniciar sesión
                    </button>

                    {errorMessage && <p className="text-red-700 text-center mt-4">{errorMessage}</p>}
                    {welcomeMessage && <p className="text-green-500 text-center mt-4">{welcomeMessage}</p>}

                    <div className="text-center">
                        <a href="/resetPassword" className="text-sm text-blue-500 hover:underline">
                            Olvidé mi contraseña
                        </a>
                        <br />
                        <a href="#" onClick={handleOpenPopup} className="text-sm text-black hover:underline">
                            Ver credenciales para loguearse en demo
                        </a>
                    </div>
                </form>
            </div>

            {/* Aquí se renderiza el pop-up */}
            <PopOpCredentials isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
    );
};

export default Login;
