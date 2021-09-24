import RegisterContent from "../../components/organism/RegisterContent"
import SideBar from "../../components/SideBar"

export default function Register() {
  return (
    <section className="d-flex flex-row">
      <SideBar />
      <RegisterContent />
    </section>
  )
}
