import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CircleLogo from "@/assets/CircleGyroscopeLogoColor-Clear.png";

export const metadata: Metadata = {
  title: "The Circle — Member Onboarding",
  robots: { index: false, follow: false },
};

export default function CircleOnboarding() {
  return (
    <div className="relative min-h-screen bg-[#e8e0d0] pt-16 text-[#1a1a2e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,190,170,0.4),transparent_60%)]" />

      <main className="relative mx-auto w-full max-w-2xl px-6 pb-24 pt-16">
        {/* Logo */}
        <div className="mb-14 flex justify-center">
          <Image
            src={CircleLogo}
            alt="The Circle"
            width={380}
            height={380}
            className="opacity-95"
            priority
          />
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#1a1a2e]/40">
            Confidential
          </p>
          <h1 className="font-(--font-display) text-4xl text-[#1a1a2e] sm:text-5xl">
            Member Onboarding
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#1a1a2e]/30" />
        </div>

        {/* Document body */}
        <div className="space-y-12 text-[15px] leading-7 text-[#1a1a2e]/80">

          {/* § 1 */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              § 1. Charter
            </h2>
            <p className="mb-4 italic text-[#5c4a1e]">Festina Lente. Make haste slowly.</p>
            <p className="mb-4">
              The Circle is not a watchdog. It does not exist to police success, to suppress profit, or to slow the work of those who push human knowledge forward.
            </p>
            <p className="mb-4">
              The Circle exists for a narrower and more difficult purpose: to address what happens when the <em>how</em> is severed from the <em>why</em>. When power, capability, or knowledge becomes a license to cut corners. When the cost of a discovery is paid by people who never agreed to the price.
            </p>
            <p className="mb-4">
              The Circle takes its name from the structure of its decisions. No discipline holds the table alone. A physicist, an economist, and a theologian — and others — sit at equal seats. What emerges from that room is not consensus by politics, but conviction held in common across fields that rarely agree on anything. When such people draw the same line, the line is worth drawing.
            </p>
            <p className="mb-4">
              The motto on our seal is older than any of our disciplines. <em>Festina lente</em> — make haste slowly — is the paradox we hold. We do not counsel delay. The world moves, and so must we. But speed without deliberation is the very failure we exist to address. Move with purpose. Never outpace your conscience.
            </p>
            <p>
              Founded by Dr. Houston Brada, The Circle operates without public profile and without political affiliation. Membership is by invitation only.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* § 2 */}
          <section>
            <h2 className="font-(--font-display) mb-6 text-2xl text-[#1a1a2e]">
              § 2. Code of Ethics
            </h2>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-[#5c4a1e]">(a) Mission discipline.</span>{" "}
                Members serve The Circle&apos;s stated purpose. Personal grievance, private advantage, and ideological agenda are inadmissible motives for action.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(b) Dissent is required.</span>{" "}
                Silence in the face of a wrong decision is itself a failure of duty. Members are expected — not merely permitted — to challenge leadership, including the founder, where conscience demands it. No member is exempt from being questioned. No member is exempt from questioning.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(c) Conflicts of interest.</span>{" "}
                Personal relationships, financial holdings, or prior associations that bear on an active matter must be disclosed. Recusal is the default response, not the exception.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(d) Proportionality.</span>{" "}
                The Circle&apos;s reach is significant. Members are bound to the principle that capability is not justification. What can be done is not the question. What ought to be done is.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(e) Confidentiality.</span>{" "}
                The work of The Circle, the identities of its members, and the matters before it are not to be discussed outside sanctioned channels. This obligation does not end with departure from active service.
              </div>
            </div>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* § 3 */}
          <section>
            <h2 className="font-(--font-display) mb-6 text-2xl text-[#1a1a2e]">
              § 3. Security Protocols
            </h2>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-[#5c4a1e]">(a) Premises access.</span>{" "}
                Entry to Circle facilities is by secured gate only. All members are scanned at each entry. No exceptions are granted for rank, tenure, or familiarity.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(b) Personal devices.</span>{" "}
                Personal devices are prohibited beyond the entry threshold. Upon arrival, members will secure all personal electronics in their assigned shielded storage locker. Lockers are individually keyed and cannot be opened by other members or by staff.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(c) Approved devices.</span>{" "}
                Only Circle-issued and Circle-secured devices may be used on premises or in the field. Personal modifications, unauthorized software, and external peripherals are prohibited.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(d) Network access.</span>{" "}
                All connections to external networks, including the open Internet, must be routed through Circle-secured infrastructure. Direct connection from a Circle device to an unsecured network is a breach.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(e) Monitoring.</span>{" "}
                Members acknowledge and consent that all Circle-issued devices are monitored continuously. Monitoring is conducted to prevent data exfiltration, intrusion, and breach — both inbound and outbound. Privacy on a Circle device is neither offered nor implied.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(f) Off-premises conduct.</span>{" "}
                Discussion of Circle matters is restricted to secured environments. Members do not communicate Circle business by personal phone, personal email, or any unsecured medium, regardless of urgency.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">(g) Reporting.</span>{" "}
                Any anomaly — a device behaving oddly, a contact making unexpected inquiries, a pattern that does not fit — is to be reported. Members are not asked to assess threats. They are asked to surface them.
              </div>
            </div>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* § 4 */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              § 4. Acknowledgment
            </h2>
            <p className="mb-10">
              I have read the foregoing Charter, Code of Ethics, and Security Protocols. I understand that my obligations under each are continuous, not conditional. I accept that my membership is contingent on my adherence to all three, and that breach of any provision may result in suspension or termination of membership and access.
            </p>

            <div className="space-y-10">
              <div>
                <div className="mb-2 h-px w-64 bg-[#1a1a2e]/30" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/40">Member signature</p>
              </div>
              <div>
                <div className="mb-2 h-px w-64 bg-[#1a1a2e]/30" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/40">Date</p>
              </div>
              <div>
                <div className="mb-2 h-px w-64 bg-[#1a1a2e]/30" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/40">Witnessed by</p>
              </div>
            </div>
          </section>
          <div className="h-px bg-[#1a1a2e]/15" />

          <div className="pt-2">
            <Link
              href="/circle"
              className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
            >
              Return
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
