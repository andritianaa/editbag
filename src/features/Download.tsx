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
    } catch (error) {
      toast.error("Erreur lors du téléchargement");
    }

    stopLoading();
  };

  return <Button onClick={handleDownload}>Télécharger</Button>;
};
