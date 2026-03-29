import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-center md:text-left">
        <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
          <div className="font-bold font-headline text-slate-800 dark:text-slate-200 mb-6">
            <span className="logo-glow">
              <img
                alt="Agamagizh Logo"
                className="w-auto object-contain mb-4 h-[128px]"
                src="https://lh3.googleusercontent.com/aida/ADBb0ui5G630mJtDya06MNYOgovPWloFZqrTOCpXDcNnqFkdGqYDnmDvpluCnmCaVwSnlDcZqpFXFCrLtHg2R6K3rSXGu6O2Ib2V1oV7piPcLq5qdFzD6Gj20pI2-k5O1rCSt2Bpt9cmgC1XC6wHlWLvcO-1C-aDEd375yvyMmEcgy-awThijo7bpQe_KvdG-iUoquNboFUn8curOkAi-lcIKHfDPrByp0N1J1CLO8eAJfoz5LNpIeDkeHPC8m_A1dTc4IEgULXq3H6w1g"
              />
            </span>
          </div>
          <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            Dedicated to the art of natural healing and the science of yoga. Your journey to inner happiness begins here.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-headline font-bold text-slate-800 dark:text-slate-200 mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-body text-sm hover:underline decoration-[#5948d3] underline-offset-4 transition-opacity">Home</Link>
            <Link to="#" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-body text-sm hover:underline decoration-[#5948d3] underline-offset-4 transition-opacity">About Us</Link>
            <Link to="#" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-body text-sm hover:underline decoration-[#5948d3] underline-offset-4 transition-opacity">Resources</Link>
            <Link to="#" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-body text-sm hover:underline decoration-[#5948d3] underline-offset-4 transition-opacity">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-headline font-bold text-slate-800 dark:text-slate-200 mb-6 text-sm uppercase tracking-widest">Legal</h4>
          <div className="flex flex-col space-y-4">
            <Link to="#" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-body text-sm hover:underline decoration-[#5948d3] underline-offset-4 transition-opacity">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-body text-sm hover:underline decoration-[#5948d3] underline-offset-4 transition-opacity">Terms of Service</Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-headline font-bold text-slate-800 dark:text-slate-200 mb-6 text-sm uppercase tracking-widest">Location</h4>
          <p className="font-body text-sm text-slate-600 dark:text-slate-400 mb-4">
            No 243 2, Near MRN Nagar, Durugam Road,<br/>
            Puthumariyamman Kovil Street, Raja Nagar,<br/>
            Kallakurichi - 606202, Tamil Nadu.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a className="text-[#5948d3] hover:opacity-80 transition-opacity" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-[#5948d3] hover:opacity-80 transition-opacity" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 text-center font-body text-xs text-slate-400">
        © 2024 Agamagizh Naturopathy & Yoga. All rights reserved.
      </div>
    </footer>
  );
}
