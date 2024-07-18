"use client";
import { toast } from "sonner";
import { addDownload } from "../actions/download.actions";
import { Button } from "../components/ui/button";
import { useLoadingStore } from "../store/loading";
import { canDownload } from "../actions/canDownload";
import { useAskToSub } from "../store/askToSub";

export type DownloadProps = {
  postId: number;
};

export const Download = (props: DownloadProps) => {
  const { startAsking } = useAskToSub()

  const { startLoading, stopLoading } = useLoadingStore();
  const handleDownload = async (e) => {
    e.preventDefault();
    startLoading();

    try {
      if (await canDownload()) {
        const downloadUrl = await addDownload(props.postId);
        const response = await fetch(downloadUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split("/").pop() || "default_filename" || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);


      } else {
        startAsking()
      }
    } catch (error) {
      toast.error("Erreur lors du téléchargement");
    }

    stopLoading();
  };

  return <Button onClick={handleDownload}>Télécharger</Button>;
};
