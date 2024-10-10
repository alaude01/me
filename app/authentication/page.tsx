import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { details } from "./data";
import { Safari } from "@/components/Safari";

export default function Authentication() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Authentication</h1>
      <Divider className="my-2" />
      <p className="indent-10 text-pretty">{details.title}</p>
      <br />
      <h3>
        การนำ Authentication มาใช้ในระบบสามารถพบได้ในหลากหลายบริบท ตัวอย่างเช่น
      </h3>
      <div className="pl-4 flex flex-col gap-2 mt-2">
        <span className="flex gap-2">
          <p className="font-bold">ระบบล็อกอินเว็บไซต์</p>
          เมื่อผู้ใช้พยายามเข้าสู่ระบบของเว็บไซต์ เช่น Facebook หรือ Gmail
          ผู้ใช้ต้องใส่ชื่อผู้ใช้และรหัสผ่านเพื่อยืนยันตัวตน
        </span>
        <span className="flex gap-2">
          <p className="font-bold">แอปพลิเคชันธนาคาร</p>
          ผู้ใช้ต้องใส่รหัสผ่านหรือใช้การสแกนใบหน้า/ลายนิ้วมือเพื่อยืนยันตัวตนในการเข้าถึงบัญชีธนาคารของตน
        </span>
        <span className="flex gap-2">
          <p className="font-bold">การเข้าถึงเครือข่ายองค์กร</p>
          พนักงานที่ต้องการเข้าถึงข้อมูลในเครือข่ายภายในขององค์กรต้องยืนยันตัวตนผ่านการกรอกชื่อผู้ใช้และรหัสผ่านหรือใช้การยืนยันตัวตนแบบสองขั้นตอน
          (Two-Factor Authentication)
        </span>
        <span className="flex gap-2">
          <p className="font-bold">การยืนยันตัวตนผ่าน OTP</p>
          ในกรณีที่มีการทำธุรกรรมออนไลน์ ผู้ใช้จะได้รับรหัส OTP ทาง SMS
          หรืออีเมล และต้องกรอกรหัสนี้เพื่อยืนยันตัวตน
        </span>
        <span className="flex gap-2">
          <p className="font-bold">การใช้บัตรพนักงาน</p>
          การใช้บัตรพนักงานหรือบัตรประจำตัวประชาชนเพื่อนำไปสแกนผ่านเครื่องอ่านบัตรเพื่อเข้าอาคารหรือพื้นที่ที่ต้องการความปลอดภัยสูง
        </span>
      </div>
      <br />
      <h3>ยกตัวอย่างการทำระบบล็อกอินเว็บไซต์</h3>
      <p className="indent-10 text-pretty">
        การทำระบบล็อกอินเว็บไซต์นั้นมีหลากหลายวิธีมาก ในที่นี้เราจะลองทำ Login
        ด้วย Authentication JSON Web Token เก็บผ่าน Cookie แล้วให้ server อ่าน
        cookie (ที่แนบมาคู่กับ HTTP request) เพื่อทำการเช็คว่า token
        ถูกต้องหรือไม่
      </p>
      <Image
        isZoomed
        alt="Flowchart"
        src="Flowchart.jpg"
        className="size-4/6 mx-auto mt-4"
      />
    </div>
  );
}
