import React from 'react'


const LogoutModal = ({ isOpen, onClose, onLogout }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-lg text-gray-900 dark:text-white ">Are you sure you want to log out?</h3>
                <div className="mt-4 flex justify-end gap-4">
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={onLogout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal
