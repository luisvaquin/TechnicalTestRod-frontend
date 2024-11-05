import React, { useEffect, useState } from 'react';

const InfoAccount = () => {
    const [accountInfo, setAccountInfo] = useState(null); // Para almacenar los datos de la cuenta
    const [error, setError] = useState(null); // Para manejar errores
    const [loading, setLoading] = useState(true); // Para manejar el estado de carga

    useEffect(() => {
        // Función para obtener la información de la cuenta
        const fetchData = async () => {
            try {
                // Realiza la solicitud GET a la API
                const response = await fetch('https://technical-test-rod-backend.vercel.app/api/InfoAccount', {
                    method: 'GET',
                    credentials: 'include', // Asegura que las cookies de sesión se incluyan
                });

                if (!response.ok) {
                    throw new Error('Error al obtener la información');
                }

                // Si la respuesta es exitosa, obtiene los datos y actualiza el estado
                const data = await response.json();
                setAccountInfo(data); // Guarda los datos de la cuenta
            } catch (error) {
                setError(error.message); // Guarda el mensaje de error
            } finally {
                setLoading(false); // Deja de mostrar el estado de carga
            }
        };

        // Llama a la función para obtener los datos al montar el componente
        fetchData();
    }, []); // Se ejecuta una sola vez cuando el componente se monta

    // Muestra un mensaje de carga mientras obtiene los datos
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Muestra un mensaje de error si hubo un problema al obtener los datos
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Muestra la información de la cuenta si los datos están disponibles
    return (
        <div>
            <h2>Información de la cuenta</h2>
            {accountInfo ? (
                <div>
                    <p><strong>Usuario:</strong> {accountInfo[0]?.userLog}</p>
                    <p><strong>Cuenta ID:</strong> {accountInfo[0]?.account_id}</p>
                    <p><strong>Número de cuenta:</strong> {accountInfo[0]?.account_number}</p>
                    <p><strong>Balance:</strong> {accountInfo[0]?.balance}</p>
                    <p><strong>Moneda:</strong> {accountInfo[0]?.currency}</p>
                </div>
            ) : (
                <div>No se encontraron datos.</div>
            )}
        </div>
    );
};

export default InfoAccount;