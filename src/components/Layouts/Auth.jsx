import 'src/assets/styles/components/authLayout.scss'

export default function AuthLayout({ children, classes }) {
  return (
      <div className={classes}>{children}</div>
  )
}
