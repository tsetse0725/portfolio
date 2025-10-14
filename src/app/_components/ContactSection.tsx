import { Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import SocialIcon from "./SocialIcon";
import SectionHeading from "@/app/_components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <SectionHeading>Let’s connect</SectionHeading>

      <div className="flex flex-wrap gap-4">
        <SocialIcon href="mailto:tse9406@gmail.com" label="Gmail" brand="gmail">
          <Mail className="h-5 w-5" />
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/tse2n.tiesto" label="Facebook" brand="facebook">
          <SiFacebook className="h-5 w-5" />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/tse2n/" label="Instagram" brand="instagram">
          <SiInstagram className="h-5 w-5" />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/tsetsen-tse-a8ab56197/" label="LinkedIn" brand="linkedin">
          <SiLinkedin className="h-5 w-5" />
        </SocialIcon>
      </div>

      <footer className="pt-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Tsetsen
      </footer>
    </section>
  );
}
