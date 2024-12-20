export default function DischargeDisplayBox({value}){
    return (
        <div className="flex flex-col items-center py-6">
            <div className='bg-slate-300 px-2 py-2 w-40 flex justify-center'>
                <p className="text-5xl text-red-600">{value}</p>
            </div>
        </div>
    );
}