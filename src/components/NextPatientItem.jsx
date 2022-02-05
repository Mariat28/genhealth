function NextPatient() {
    return (
        <div className="bg-white p-4 mt-3 max-h-full  min-h-[400px] overflow-auto mr-6">
            {/* profile picture */}
            <div className="flex ">
                <div className="rounded-full h-12 w-12">
                    {/* avatar div  */}
                </div>
                <div className="flex flex-col">
                    <span className="text-blue-900 font-semibold">Mariat Ndagire</span>
                    <span className="text-slate-500 text-sm">Plot 65 Kampala Road,</span>
                    <span className="text-slate-500 text-sm">Kampala, Uganda</span>
                </div>
            </div>
            {/* bio data  */}
            <div className="mt-6">
                <div className="table">
                    <table className="table-fixed">
                        <tbody>
                            <tr>
                                <td className="w-1-2">D.O.B</td>
                                <td>Sex</td>
                                <td>Weight</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default NextPatient;