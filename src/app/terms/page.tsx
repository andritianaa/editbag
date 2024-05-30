import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "../../components/common/Footer";
import { NavBar } from "../../components/common/NavBar";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <NavBar />
      <div className="w-full h-full max-md:p-4">
        <Layout className="card p-16 space-y-4 my-8 max-md:my-0 max-md:p-8">
          <h1 className="text-3xl">Terms and Conditions of Use for Editbag</h1>
          <p className="text-muted-foreground">Last Updated: 02 may 2024</p>
          <p>{`Please read these terms and conditions of use ("Terms", "Terms of Use") carefully before using the Editbag boilerplate (the "Service") operated by Andritiana Steve ("We", "Our", "Us").`}</p>
          <p>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </p>

          <h2 className="text-3xl pt-4">Payment and Redistribution:</h2>
          <ul className="list-disc">
            <li>
              <b>Payment :</b> Access to and use of the Service is subject to
              payment of the applicable fees, as specified by Andritiana Steve.
            </li>
            <li className="pt-4">
              <b>Redistribution Prohibited :</b> You agree that the Service,
              including any code, templates, or resources provided, is for your
              personal or internal business use only. Redistribution, resale, or
              sharing of the Service, in whole or in part, is strictly
              prohibited without prior written consent from Andritiana Steve.
            </li>
          </ul>
          <h2 className="text-3xl pt-4">Disclaimer:</h2>
          <p>{`Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.`}</p>
          <h2 className="text-3xl pt-4">Changes:</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <h2 className="text-3xl pt-4">Contact Us:</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            <a
              href="mailto:pro@andritiana.tech"
              className="ml-2 text-blue-600 hover:underline"
            >
              pro@andritiana.tech
            </a>
          </p>
        </Layout>
        <Footer />
      </div>
    </>
  );
}
