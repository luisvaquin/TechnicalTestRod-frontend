import React, { useState } from "react";
import NavbarNavigate from "../components/navbar-account";

const AccountUser = () => {
    const [comment, setComment] = useState(""); // Inicializa el estado para comment

    return (
        <>
            <NavbarNavigate />
            <div className="max-w-4xl mx-auto p-4 mt-[8rem]">
                <h1 className="text-[#004B93] text-xl font-semibold mb-6">Transferencias locales</h1>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="debitAccount" className="block font-medium">Debitar de</label>
                            <select id="debitAccount" className="bg-white border border-gray-300 rounded p-2 w-full">
                                <option value="BI Q0420011502 CARCAMO PALMA DE PENAG">BI Q0420011502 CARCAMO PALMA DE PENAG</option>
                                <option value="account1">BI Q0420011502 CARCAMO PALMA DE PENAG</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="creditAccount" className="block font-medium">Acreditar a</label>
                            <select id="creditAccount" className="bg-white border border-gray-300 rounded p-2 w-full">
                                <option value="BI $ 0040085367 MORALES CRUZ HECTOR ARNI">BI $ 0040085367 MORALES CRUZ HECTOR ARNI</option>
                                <option value="account1">BI $ 0040085367 MORALES CRUZ HECTOR ARNI</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-3 rounded">
                        <label className="font-medium">Tasa de cambio (Venta)</label>
                        <div className="font-medium">Q. 7.83</div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="quetzalesAmount" className="block font-medium">Monto a debitar en quetzales</label>
                            <input
                                id="quetzalesAmount"
                                placeholder="Monto a debitar en quetzales"
                                type="number"
                                step="0.01"
                                className="bg-white border border-gray-300 rounded p-2 w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="dollarAmount" className="block font-medium">Monto a acreditar en dólares</label>
                            <input
                                id="dollarAmount"
                                placeholder="Monto a acreditar en dólares"
                                type="number"
                                step="0.01"
                                className="bg-white border border-gray-300 rounded p-2 w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="comment" className="block font-medium">Comentario</label>
                        <input
                            id="comment"
                            placeholder="Ingresar un comentario de 500 caracteres. Identifica que es lo depositado en tu estado de cuenta."
                            maxLength={500}
                            value={comment} // Utiliza el estado comment
                            onChange={(e) => setComment(e.target.value)} // Maneja el cambio de texto
                            className="bg-white border border-gray-300 rounded p-2 w-full"
                        />
                        <div className="text-sm text-gray-500 mt-1 text-right">
                            {comment.length}/500
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#00BFB3] hover:bg-[#00BFB3]/90 text-white px-8 py-2 rounded"
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}

export default AccountUser;
