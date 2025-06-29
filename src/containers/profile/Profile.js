import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState(null); // ✅ start with null instead of []
  
  function setProfileFunction(user) {
    setrepo(user); // ✅ directly set user object
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user); // ✅ set user object
          })
          .catch(function (error) {
            console.error(
              `${error} (GitHub section fallback to default)`
            );
            setProfileFunction(null); // ✅ use null instead of string
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof !== null
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id || "github-profile"} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
