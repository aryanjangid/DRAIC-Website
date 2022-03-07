import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import members from "./eleDep";
import "./electrical-department.css";

const ProfDepList = members.filter((member) => member[3] === "Electronics");

function Elecdep() {
  return (
    <>
      <div className="elec-department-page">
        <div className="elec-department-hero-container">
          <div className="elec-department-text-container">
            <h1 className="elec-department-title">ELECTRICAL DEPARTMENT</h1>
            <p className="elec-department-description">
              A random paragraph generator is a tool provided by various
              websites that provides you as many random paragraphs as you want.
              Be it for any work purpose of yours, effortlessly. A random
              paragraph generator is a tool provided by various websites that
              provides you as many random paragraphs as you want. Be it for any
              work purpose of yours, effortlessly.
            </p>
          </div>
          <div className="elec-department-image-container">
            <img
              loading="lazy"
              decoding="async"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABIFBMVEUAAAAzMzMaGhpNTU0AqZ0eHh7///8oKChmZmYlJSUvLy9ISEimpqY1NTW4uLgsLCzi4uIRERFTU1PQ0NBZWVk+Pj709PTX19eQkJD9y6LOzs5wcHD8voscHByYmJgVFRWtra0bBAh4eHgMiH+GhoZJQkP/0aYjKS3/xpEzn5j8vYkWISjwwZtBQUFfX1+XclPVoXahhW4zLC06iIOPd2TcspCpf12SblBXQjDGoYOtjnXpsIBjSjaIYUX0rnp+a1sBbmYAfHQbERICNjIBmo8ALitALyO+m39QSEJMOi1vX1PBkmsuIxsAESByVj/MmXA/Ni4wGQAlHBRyTi4CQj4AUEszV1QBYFozZGEzcm0yuK8yp58MIB4AEhACc2sBHx26vcsoAAAJjklEQVR4nO2da1faSBiAE64ajBgrXkG0uCRVUKFcRLQqUrXYxd22rHVb3P//L3YmEZiQTDIhgUx0ntMPPT2eZN6nk5l33plEjmMwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGY5rE+akS8js+EsLiVEn5HR8Jial2A+aAOWAOmAPmIKgOhKwR97lDoBwI4VUj264lBMoBL743siK8LQd80ohrBUFzEDfy1hyk1o3Mva1nQUgsGXlrY6IQMvLG5sYpESwHZv0Az6t0YJojYYmlXqMDXtxygvgqHZjlSHhe5bNgmiPheZ0OzHIkPK/yWTDNkfC8zjFRyLz5uXFKBMzBvBNepQNnOdLq6xwPWI7Ee5ojCbKKMHTQOmrWbszvnxU8IuqBA+9yJDlVaVSrt5W7A1l10Ko304Ca6f2jpF3KBjHu3oF3OZJcKWxoNC54mbs5Ug2k00rzC90OvMuR5NuNEYXGcRrhBO8gHopOhncOnOVIGbyCg9P8Bso+6iBtHBReHMTXl9Ym4l3UOwcekezoFYw5aGIdbL/npAng1rx0MG/X6YgWzAeFDRMHigb4SxfjILk1WTdYW5j3zIF9jhRbIFgxC4NukAe8ODi+r9W73bOTk3Ng4xjjgE9OOBwMUlYv+oG4NWfNVphgt0G+zW+A2KuN00rnToZDg4JMBl9NHgaK5gWCHIlkwwU8Cvnb4sHBgSwnBShkQ/kK7yLdnNWPzriu8kC1A9u8iMhBPl/9M5lKiTzIE/+sgmchXT85um9qI8Ixd3xPs4PUth0kO2+gH8glMBgUqtVqo5pXxwMFjghHgG73IV3nzh6O0TSBIgdCwm4AXlq3GRPBKkGQG6VO5QJQKZVKF3CO2Fdq3frR/TGg2TxLn5wpaeUTnQ54IZqxwU5B6vS2I1c6jYI6LcAk8QJMDsrDEZwb4R8wK3zh6oo+X6TJgWvkKhgLDlJwLih0/roogAmiVC1VjrpAwcPfod0HLfg6zBeQuYImB8IkWRpC9g78z1dlmCMVimuxteUGWDPdNapH4D++NrcaWy0+qCnS+ad93QRJkQMhHHPH0hfVgQxC76zGtndic0AG6BTNWlpZjm1ux2J3+5qDT8o5nQ54ccUdyzLoAQ1ZLuULIN6t9die5uAYOJiLbXGx2DZYQn6DDvYlSh3wbus4ciVfaMjCXb7Q6XQuLjqV/MBBuvb9/Pz79/MmzJTr+2l0WqDLgaO6spG4cAf7AS+DSaFxe3vbUFPmjY0mGA+U+1qtBsZEpc7BeUG3ZqDJQWrBHdtxoZCHDhrDJWP+FDwe+11FWzi+lA9odmCbI9mwGJU1B6X8AJAfAAf35yA50oAVxa6i6AqLNDngJ1y7jtawmgM+VdKoVNS6IkiM1EQZUFNToy/6WhJVDlwDkqRb4CBZ2ChAtBpCflA9gXwzuT9NDoSQyaFtB0R54e70IglUNLTiSb56CjtD9+zs5OYGlpYV0+I6RQ5c50irIbBoguU24U5dL+ZP4TZLUtTu8i0Q+wvisjtGVSbhAKyeCxcH6lUHe23fmmfm96fJgescCWmPXDxNybzOARaqHLjNkdAGCXCvUYjDzClIDoquc6SxRgnL8J93dnY2NxcD4iDxzh2LhnMZya3FJThabr63uj9NDtznSAaS86Eob3d/qhxMhYCNiY7OHxgx34kLlAP3dSTTvehAOeDFsDsSprsPwXLgZY4UWAeOsyKilgXKgeMcaYek8cFyAHKkTSe8e0dyTjNYDpznSEQtC5aDqRAwBxYft3HRsjEHj1ef6XVglSMZl0N4ymXdJDnm4EckEmn3aHVgVUcif1zK5X8+fhTLOAdQAbTwSKkDixyJ3MDPD5Cf5aEFnYPLyJBLOh3gkyGyN/nK5acPA36KZc0D4qDXjqAMLNDkoLiDZY9EQvnpX8gv1cGvXx+f/oEeylpdud+7ihi4pM8BPh3CfQJATA0Ri8M+8OHjiKenpx+93uNVzpzfksTNv1yABgcWORLuIFIC5Q9TEokWYBdDKJMJvVylSIUD5xQTtoTDWbu3BJmDgQPSl8Roc5BiDkgcJEgd+DomhlMTUyTZhgyCg6yLPQX7+hsftVEwcOBWgSsHbrCLjwTmgDlQHYQ1B66/4OuTA7vxjgStJBfPuBiWNCT79tLqQCX7w58APEDyysHuVc/+blTSf2x55SAX8TuYCbm62vXKQTty5Xc0E3EdyXnoIHLtdzyT0I607R2o5zftHcBKq9/xTMAjaLeNg6yULIaXE6m4ZKMhCmtrj/b3pIw+bLZ1ZFLx8OU94UPRcgrJXqsFxr7fMTklB1v92yqw6CHytvSKVU9o9VQHOb9jcojW6usWPrCo/pXxQwsJrUet0hywTOml0XgH0qHewdwK/nFovey+BGtYfNkuwCdJ2aLh4wEitifsDnYfLv2OywHXgzZjHRi6gVVH2M0N9l3+8zsycgbbZldYB/MmX5HA/ayaIkUCNiwON0/xiaJg4mAe62C0AReUtdN/wxbjE0VHDlrILqTfwRGSG7UY68DRs9BCduWf/Y6OiN6owfiFo6MxMTscYADjh3WoZNTcNr6S5GhuzGqZd3CSBOQkwbVFVTVLniNlpD73OLoq/Wun61Fjn7m+RQI8NiIc4n8yI3F9dJDxO0RbRk9uG7Rcwn9pbmzNhFcAHXD938EZFpEBERZ+LBzAtfOwE6Ss1s4ZcKE+8oyZJ0p7KDONeZxLXTewdhDKSkIxvBwuJq1rKNABOiCYO1hEXiBbm2nM4yAjotpl7b66mM1K9rU0kHYhwwHGwQ56pnymMY/zjLS1fW3vgAi0EwDMS8wLiAOrFyanj761z55sOUbbuotiKszbiIOd2QY9Rl/f3LYHClo/9Ne8NL/zHuJgYaYxG+jpG/zZAwe6S+ZwJYS9xRHrMw3ZSF935NSqokjqAJ0S8KuFLYocgEEcsdBz72BYSYvkrPaaDhEH/uYHGqOpzINt14EDSwMct4I4sHyLfGYMLDx74KBNYIDjwoiDw5nEaI9mwYOt510SAxwnIg5WZhAfGZ9zVhVFciJtks0VCXGwPPXYyPmcI9h6tuM34fYS4qA43bAc4kF+kCW8FeLAxe9amAa+OJhqRM5xrSBDeqhugVoHrs/nETvYptaB+/N5zh3suGqx69OgBuZdfkclHie8UXZr+JtQ3ks2P2vpwKMX6Xwhaf5NLhNEKwWSy4+eBISEpYNlv5s3G5gD5gDCHDAHEEsHfjduNljOCwwGg8FgMBgMBoPBYDAYDAaDwWAwGAwC/gcVV0b9MUeo8gAAAABJRU5ErkJggg=="
              className="elec-department-image"
              alt="departimg"
            ></img>
          </div>
        </div>

        <div className="elec-department-header-container">
          <h1 className="elec-department-moto">
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
          </h1>
          <div className="seperator">
            <div className="depline1"></div>
            <div>
              <h1 className="elec-department-name">ELECTRICAL TEAM</h1>
            </div>
            <div className="depline2"></div>
          </div>
        </div>
        <div className="elec-department-members-container">
          {ProfDepList.map((card) => {
            return (
              <div className="profile-card">
                <div className="text">
                  <Avatar img={card[4]} />
                  <h3>{card[2]}</h3>
                  <p>{card[5]}</p>
                  <div className="links">
                    <SocialMedia linkedin={card[7]} instagram={card[8]} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Elecdep;
