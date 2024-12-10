export default function DisplayBox({value, name}){
    return (
        <div className="flex flex-col items-center py-10">
            <div className='bg-slate-500 px-2 py-2 w-40 flex justify-center'>
                <p className="text-5xl">{value}</p>
            </div>
            <p>{name}</p>  
        </div>
    );
}