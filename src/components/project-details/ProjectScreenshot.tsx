
export const ProjectScreenshot = () => {
  return (
    <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 relative">
      <img 
          alt="Project Screenshot" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0StVSpViEDkfUrIAJDtpj7lMaUzzkGLQHQbIrxqoMJBTk_ohoF3mE6xHm04Gs1nfMGT4weyMTBciol1x--q3lbAz_BFjz_P4aeGKmgHucUY_IrFNzVNEdtp31azX4Am-mXhhJ1TheIk1nnF1XwfJeJPDRM_BLs--i59Os3GzWyaiv7wdKWpktHyTbJnjY3X1mp_unR3_7NdXn1_KdYAm7Iq0heA1754f00hZZ144bYMC67NOhrqkm_gsaMzsNE8r6S7Q8wX-a5yk" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
        <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Featured Project</span>
      </div>
    </div>
  );
};
