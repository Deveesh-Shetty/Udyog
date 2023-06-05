"use client"

import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { createClient } from "@supabase/supabase-js"

function AuthForm() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      theme="dark"
      showLinks={false}
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "var(--accent-dark)",
              brandAccent: "var(--accent-light)",
            },
          },
        },
      }}
    />
  )
}

export default AuthForm
