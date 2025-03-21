export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      {/* Backdrop blur layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Navbar content */}
      <div className="relative flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Talokan</div>
        <button>signin</button>
      </div>
    </div>
  );
}
