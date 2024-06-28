import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "../../components/common/Footer";
import { NavBar } from "../../components/common/NavBar";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <NavBar />
      <div className="flex h-full w-full flex-col items-center max-md:p-4">
        <Layout className="card my-8 max-w-2xl space-y-4 p-16 max-md:my-0 max-md:p-8">
          <h1 className="text-3xl">PRIVACY POLICY</h1>
          <p className="text-muted-foreground">Last Updated: June 26, 2024</p>
          <p>
            {`EditBag ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your personal information when you use our SaaS
            service ("Service").`}
          </p>

          <h2 className="pt-4 text-2xl">1. Information We Collect</h2>
          <h3 className="pt-2 text-xl">1.1 Information You Provide to Us</h3>
          <p>
            Registration Information: When you create an account on our
            platform, we collect information such as your name, email address,
            password, and payment information.
          </p>
          <h3 className="pt-2 text-xl">
            1.2 Automatically Collected Information
          </h3>
          <p>
            Device Information: We collect information about the device you use
            to access our Service, including IP address, browser type, Internet
            service provider, referrer pages/exit pages, and timestamps.
          </p>
          <h3 className="pt-2 text-xl">1.3 Information from Third Parties</h3>
          <p>
            Payment Services: We may receive information about you from our
            third-party payment processors to process your transactions.
          </p>

          <h2 className="pt-4 text-2xl">2. Use of Your Information</h2>
          <p>
            We use your information to provide and improve our Service,
            communicate with you, ensure security and compliance, and manage our
            business operations.
          </p>

          <h2 className="pt-4 text-2xl">3. Sharing Your Information</h2>
          <p>
            We may share your information with third-party service providers who
            perform services on our behalf, comply with legal obligations, or in
            connection with a business transaction.
          </p>

          <h2 className="pt-4 text-2xl">4. Security of Your Information</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, use, modification, and
            disclosure. However, no method of transmission over the Internet or
            electronic storage is 100% secure.
          </p>

          <h2 className="pt-4 text-2xl">5. Your Rights</h2>
          <p>
            You can access and update your personal information through your
            account settings, request deletion of your personal information, and
            opt out of marketing communications.
          </p>

          <h2 className="pt-4 text-2xl">6. Data Retention</h2>
          <p>
            We retain your personal information as long as necessary to fulfill
            the purposes described in this Privacy Policy, unless a longer
            retention period is required or permitted by law.
          </p>

          <h2 className="pt-4 text-2xl">7. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries
            other than the one you reside in. These countries may have different
            data protection laws than your country. By using our Service, you
            consent to the transfer of your information to other countries.
          </p>

          <h2 className="pt-4 text-2xl">8. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            Your continued use of our Service after the changes constitutes your
            acceptance of the updated Privacy Policy.
          </p>

          <h2 className="pt-4 text-2xl">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:editbagsaas@gmail.com"
              className="text-[#ffffff] hover:underline"
            >
              editbagsaas@gmail.com
            </a>
            .
          </p>
        </Layout>
        <Footer />
      </div>
    </>
  );
}
