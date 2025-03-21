import {
  MessageSquare,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-12">
      {/* Main Contact Methods */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/97517959259"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-8 text-center rounded-xl border border-border/60 bg-background hover:bg-primary/5 transition-colors"
        >
          <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            WhatsApp
          </h3>
          <p className="text-muted-foreground mb-3">
            Quick responses within hours
          </p>
          <p className="text-lg font-medium">+975 17959259</p>
        </a>

        {/* Email */}
        <a
          href="mailto:contact@yangkoo.com"
          className="group flex flex-col items-center p-8 text-center rounded-xl border border-border/60 bg-background hover:bg-primary/5 transition-colors"
        >
          <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            Email
          </h3>
          <p className="text-muted-foreground mb-3">
            For all booking inquiries
          </p>
          <p className="text-lg font-medium">contact@yangkoo.com</p>
        </a>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">
          Connect With Us
        </h3>
        <div className="flex justify-center gap-8">
          <a
            href="https://instagram.com/luxuryhotel"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
              <Instagram className="h-7 w-7 text-white" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">
              Instagram
            </span>
          </a>

          <a
            href="https://facebook.com/luxuryhotel"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
              <Facebook className="h-7 w-7 text-white" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">
              Facebook
            </span>
          </a>

          <a
            href="https://twitter.com/luxuryhotel"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="h-14 w-14 rounded-full bg-sky-500 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
              <Twitter className="h-7 w-7 text-white" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">
              Twitter
            </span>
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center text-muted-foreground mt-12 pt-6 border-t">
        <p className="mt-2">
          For urgent matters, please contact us via WhatsApp
        </p>
      </div>
    </div>
  );
}
