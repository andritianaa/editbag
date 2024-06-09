import { Suspense } from "react";
import { Plans } from "@/components/dashboard/billing/plans/plans";
import { Subscriptions } from "@/components/dashboard/billing/subscription/subscriptions";
import { DashboardContent } from "@/components/content";
import { PageTitleAction } from "@/components/page-title-action";
import { PlansSkeleton } from "@/components/skeletons/plans";
import { CardSkeleton } from "@/components/skeletons/card";

export const dynamic = "force-dynamic";

export default function BillingPage() {
  return (
    <DashboardContent
      title="Billing"
      subtitle="View and manage your billing information."
      action={<PageTitleAction />}
    >
      <div>
        <Suspense fallback={<CardSkeleton className="h-[106px]" />}>
          <Subscriptions />
        </Suspense>

        <Suspense fallback={<PlansSkeleton />}>
          <Plans />
        </Suspense>
      </div>
    </DashboardContent>
  );
}
