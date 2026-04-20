
const SuccessModal = ({ isOpen, onClose, title, message, buttonText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
            <div className="bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
     
                <div className="flex justify-center mb-6 md:mb-10">
                    <img 
                        src="/Congratulations.svg" 
                        alt="Success" 
                        className="w-32 h-32 md:w-44 md:h-44 object-contain" 
                    />
                </div>

  
                <h2 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
                    {title || "Congratulations"}
                </h2>

                <p className="text-gray-500 text-sm md:text-base mb-8 md:mb-10 leading-relaxed px-2 md:px-4">
                    {message}
                </p>

                <button
                    onClick={onClose}
                    className="w-full md:w-max md:px-16 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white py-3 rounded-xl font-normal text-base md:text-lg shadow-md active:scale-95 transition-all mx-auto block"
                >
                    {buttonText || "Ok"}
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;