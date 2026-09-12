import React from 'react';
import { ArrowLeft } from 'lucide-react';

const AuthSkeleton = () => {
    return (
        <div className="flex min-h-screen w-full animate-pulse">
            <div className="hidden lg:block lg:w-1/2 bg-gray-200"></div>
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 bg-[#F6F7FD] py-2">
                <div className="w-full max-w-120 bg-white rounded-xl shadow-sm p-4 sm:p-10 border-slate-100 relative">
                    <div className="text-center mb-8 mx-auto flex flex-col items-center">
                        <div className="w-24 h-8 bg-gray-200 rounded-full mb-6 mt-12 sm:mt-2 self-start absolute left-2 top-4"></div>
                        <div className="w-48 h-8 bg-gray-200 rounded-md mt-6"></div>
                        <div className="w-64 h-4 bg-gray-200 rounded-md mt-2"></div>
                    </div>
                    <div className="flex bg-[#F0F9FF] rounded-full mb-8 mx-auto w-full h-12 p-1.5">
                        <div className="w-1/2 h-full bg-gray-200 rounded-full mr-1"></div>
                        <div className="w-1/2 h-full bg-gray-200 rounded-full ml-1"></div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full h-12 bg-gray-200 rounded-full"></div>
                        <div className="w-full h-12 bg-gray-200 rounded-full"></div>
                        <div className="w-full h-12 bg-gray-300 rounded-full mt-6"></div>
                    </div>
                    <div className="flex items-center my-6">
                        <div className="grow border-t border-[#837d7d] opacity-30"></div>
                        <span className="px-3 text-sm text-[#262626] opacity-30">Or continue with</span>
                        <div className="grow border-t border-[#837d7d] opacity-30"></div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="mt-8 flex justify-center w-full">
                        <div className="w-48 h-4 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthSkeleton;
