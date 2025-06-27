import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!userData) return; // wait for userData to load

        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    // ✔️ Only allow editing if user is owner
                    if (post.userId === userData.$id) {
                        setPost(post);
                    } else {
                        navigate("/"); // not the owner
                    }
                } else {
                    navigate("/"); // post not found
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate, userData]);

    // ✔️ While loading user or post, show loading
    if (!userData || !post) {
        return <p className="text-center py-10">Loading post...</p>;
    }

    return (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    );
}

export default EditPost;
