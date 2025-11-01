import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      {/* Newsletter Section */}
      <div className="border-b bg-background">
        <div className="container-plp py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">BE THE FIRST TO KNOW</h2>
            <p className="text-muted-foreground">
              Sign up for updates from mettā muse.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your e-mail..."
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Currency Section */}
      <div className="border-b">
        <div className="container-plp py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">CONTACT US</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">CURRENCY</h3>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">
                  $
                </div>
                <span className="text-sm">USD</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-plp py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">mettā muse</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Artisans</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Boutiques</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Orders & Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Payment & Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Return & Refunds</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">FAQs</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">FOLLOW US</h3>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-muted transition-smooth">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-muted transition-smooth">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">mettā muse ACCEPTS</h3>
            <div className="grid grid-cols-3 gap-2">
              {["GPay", "Mastercard", "PayPal", "Amex", "Apple Pay", "O Pay"].map((payment) => (
                <div
                  key={payment}
                  className="h-8 border rounded flex items-center justify-center text-xs font-medium bg-background"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t">
        <div className="container-plp py-6">
          <p className="text-center text-sm text-muted-foreground">
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
