import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function popOpCredentials({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md text-center max-w-xs">
                <h2 className="text-lg font-semibold mb-4">Credenciales demo</h2>
                <p className="text-gray-700 mb-4">Codigo: 87654321</p>
                <p className="text-gray-700 mb-4">Password: admin</p>
                <p className="text-gray-700 mb-4">Usuario: Luis</p>

                <EmojiEmotionsIcon color="" style={{ fontSize: 35, color: '#FFFFFF' }} />

                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default popOpCredentials;