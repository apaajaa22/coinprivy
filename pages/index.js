import LoginContent from "../components/organism/LoginContent"
import SideBar from "../components/SideBar"

export default function Login() {
  return (
    <section className="d-flex flex-row">
      <SideBar />
      <LoginContent />
    </section>
  )
}
