import { FC, useEffect, useState, ChangeEvent } from "react";
import { Card, Container, Button, List } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import useStore from "../hooks/useStore";
import Upload from "../components/Upload";

const FilesPage: FC = () => {
    const pages = ["files", "images", "trash"];
    const [searchParams, setSearchParams] = useSearchParams();
    const [active, setActive] = useState<number>(
        !searchParams.get("type")
            ? 0
            : pages.indexOf(searchParams.get("type") as string),
    );

    const { filesStore, userStore } = useStore();

    const onClick = (elem: string, index: number): void => {
        setSearchParams(index === 0 ? {} : { type: elem });
        setActive(pages.indexOf(elem) || 0);
    };

    useEffect(() => {
        filesStore.getFiles(userStore.user?.id || -1, pages[active]);
    }, [filesStore.files]);

    async function onRequest(options: any) {
        try {
            const { file, onProgress, onSuccess } = options;
            const response = await filesStore.uploadFiles(
                file,
                onProgress,
                onSuccess,
            );
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Card sx={{ padding: 3, display: "flex", height: "100%" }}>
            <div className="left_sidebar">
                <Upload customRequest={onRequest} />
                <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {pages.map((e, index) => (
                        <Button
                            key={e}
                            fullWidth={true}
                            sx={{
                                ":hover": {
                                    backgroundColor: "rgba(29, 103, 177, .2)",
                                    transition: "all .6s linear",
                                },
                                backgroundColor:
                                    index === active
                                        ? "rgba(29, 103, 177, .1)"
                                        : "transparent",
                            }}
                            onClick={() => onClick(e, index)}
                        >
                            {e}
                        </Button>
                    ))}
                </List>
            </div>
            <Container className="right_content">content</Container>
        </Card>
    );
};
export default FilesPage;
