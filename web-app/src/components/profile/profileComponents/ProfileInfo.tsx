import type {PlayerType} from "../../../data/Types";
import ProfileInfoItem from "./ProfileInfoItem";

interface Props {
    player: PlayerType;
}

const ProfileInfo = ({player}: Props) => {
    const goToWebsite = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="profile-info">
            {player.name && <ProfileInfoItem label="Name: " value={decodeURIComponent(player.name)}/>}
            <ProfileInfoItem
                label="Full name: "
                value={decodeURIComponent(player.fullName)}
            />
            {player.age && <ProfileInfoItem label="Age: " value={player.age + " years"}/>}
            {player.country && <ProfileInfoItem label="Country: " value={player.country}/>}
            {player.weight && <ProfileInfoItem
                label="Weight: "
                value={(player.weight || "-") + " kg"}
            />}
            {player.height && <ProfileInfoItem
                label="Height: "
                value={(player.height || "-") + " cm"}
            />}
            {player.position && <ProfileInfoItem label="Position: " value={player.position}/>}
            {player.number && player.number > 0 ?
                <ProfileInfoItem label="Number: " value={player.number || "-"}/> : null}
            {player.preferredFoot && (
                <ProfileInfoItem
                    label="Preferred foot: "
                    value={player.preferredFoot}
                />
            )}
            {player.value && <ProfileInfoItem
                label="Value: "
                value={`${player.value} ${player.currency}`}
            />}
            {player.highstValue && (
                <ProfileInfoItem
                    label="Highest value in career: "
                    value={player.highstValue}
                />
            )}
            {player.currentClub && (
                <ProfileInfoItem label="Current club: " value={player.currentClub}/>
            )}
            {player.elo && player.elo > 0 && <ProfileInfoItem label="ELO: " value={player.elo}/>}
            {player.caps !== "played  /  Goals" && (
                <ProfileInfoItem
                    label="CAPS"
                    value={
                        player.position === "Goalkeeper" || player.position === "Goa"
                            ? player.caps + " conceded"
                            : player.caps
                    }
                />
            )}
            {player.otherNation && (
                <ProfileInfoItem
                    label="Other nationality: "
                    value={player.otherNation}
                />
            )}
            {player.website && (
                <div className="info-item">
                    <strong>Website:</strong>{" "}
                    <span className="website" onClick={() => goToWebsite(player.website)}>
            {player.website}
          </span>
                </div>
            )}
            {player.status && (
                <ProfileInfoItem label="Status: " value={player.status}/>
            )}
            <ProfileInfoItem
                label="Born: "
                value={`${player.born} / ${player.birthCountry}`}
            />
        </div>
    );
};

export default ProfileInfo;
