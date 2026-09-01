import Button from "./Button";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#fff7f7] to-[#f9efef] p-6 font-sans">
      <div className="w-full max-w-95 rounded-2xl border border-[#f0d3d3]/80 bg-white p-7 shadow-[0_12px_30px_rgba(229,122,122,0.15)]">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#2f2f2f]">
          Login
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-[#4a4a4a]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full box-border rounded-xl border border-[#f0d3d3] bg-[#fffdfd] px-3.5 py-3 text-[15px] text-[#2f2f2f] outline-none transition duration-200 placeholder:text-[#a4a4a4] focus:border-[#e57a7a] focus:shadow-[0_0_0_3px_rgba(229,122,122,0.12)]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-[#4a4a4a]"
            >
              Adgangskode
            </label>
            <input
              id="password"
              type="password"
              placeholder="Skriv din adgangskode"
              className="w-full box-border rounded-xl border border-[#f0d3d3] bg-[#fffdfd] px-3.5 py-3 text-[15px] text-[#2f2f2f] outline-none transition duration-200 placeholder:text-[#a4a4a4] focus:border-[#e57a7a] focus:shadow-[0_0_0_3px_rgba(229,122,122,0.12)]"
            />
          </div>

          <Button
            type="submit"
            pageToSet={"hjem"}
            className="mt-2 rounded-xl bg-[#E57A7A] px-4 py-3.5 text-base font-bold text-white shadow-[0_8px_18px_rgba(229,122,122,0.25)] transition hover:bg-[#dc6d6d] focus:outline-none focus:ring-2 focus:ring-[#e57a7a] focus:ring-offset-2"
          >
            Login
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-[#6b6b6b]">
          Har du ikke en konto?{" "}
          <a
            href="#"
            className="font-semibold text-[#E57A7A] no-underline hover:underline"
          >
            Opret Konto
          </a>
        </p>
      </div>
    </div>
  );
}
