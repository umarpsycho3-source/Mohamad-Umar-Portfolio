import { login } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md glass rounded-3xl p-8 border border-primary/20 neon-box-glow bg-background/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">
            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Portal</span>
          </h1>
          <p className="text-foreground/60">Sign in to manage your portfolio</p>
        </div>

        <form className="space-y-6" action={login}>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
              placeholder="••••••••"
            />
          </div>

          {searchParams?.error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
              {searchParams.error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}
