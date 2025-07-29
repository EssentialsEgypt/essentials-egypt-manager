export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Login to Manager</h1>
      <form className="flex flex-col space-y-4 w-80">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button className="bg-black text-white py-2 rounded hover:bg-yellow-500">Login</button>
      </form>
    </div>
  );
}