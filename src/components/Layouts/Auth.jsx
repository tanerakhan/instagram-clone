import 'src/assets/styles/components/authLayout.scss'

export function AuthLayout({ children, classes }) {
  return (
      <div className={classes}>{children}</div>
  )
}
