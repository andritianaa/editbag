"use client";
import { toast } from "sonner";
import { addDownload } from "../actions/download.actions";
import { Button } from "../components/ui/button";
import { useLoadingStore } from "../store/loading";

export type DownloadProps = {
  postId: number;
};

export const Download = (props: DownloadProps) => {
  const { startLoading, stopLoading } = useLoadingStore();
  const handleDownload = async (e) => {
    e.preventDefault();
    startLoading();

    try {
      const url = await addDownload(props.postId);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", url.split("/").pop() || "default_filename");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error("Erreur lors du téléchargement");
    }

    stopLoading();
  };

  return <Button onClick={handleDownload}>Télécharger</Button>;
};
