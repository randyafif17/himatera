import './heroprojects.css';
import React from 'react';
import ProjectData from './ProjectData';
import Avatar from "../assets/image/img_avatar.png";

const HeroProjects = () => {
    return (
        <div className="himatera-project section__margin">
            {/* <div className="himatera__first-project">
                <div className="himatera__first-project_text">
                    <h2 className='gradient__text'>{first_project}</h2>
                    <p>{first_project_text}</p>
                </div>
                <div className="himatera__project-image">
                    <img src={first_project_image_left} alt="project" />
                    <img src={first_project_image_right} alt="project" />
                </div>
            </div> */}
            <ProjectData 
                className="himatera__first-project"
                heading="Berbagi Kebahagiaan di Bulan Suci"
                text="Solo - Poros Nasional Pemberantasan Korupsi (PNPK) melaporkan sejumlah menteri hingga kepala daerah ke KPK. Salah satu yang dilaporkan adalah Ganjar Pranowo.
                Ganjar merespons laporan yang dilakukan Adhie Massardi dan kawan-kawan tersebut. Ganjar Pranowo dilaporkan atas diduga terlibat dalam korupsi e-KTP. 
                Presidium PNPK, Adhie Massardi mengatakan KPK seharusnya dapat menuntaskan semua dugaan tersebut, agar nama-nama pejabat itu jika maju dalam Pilpres 2024 bersih. 
                Nah kami berharap dari kasus-kasus ini sehingga ada sejumlah nama di dalamnya yang kami laporkan itu contoh misalnya kandidat-kandidat yang ramai 
                sekarang ini di pilpres pertama soal Ganjar Pranowo apakah benar dia terlibat e-KTP atau tidak kan ini harus dibahas juga kata Adhie Massardi 
                di Gedung Merah Putih KPK Jakarta Selatan Kamis"
                img1={Avatar}
                img2={Avatar}
            />

            <ProjectData 
                className="himatera__first-project_reverse"
                heading="Berbagi Kebahagiaan di Bulan Suci"
                text="Solo - Poros Nasional Pemberantasan Korupsi (PNPK) melaporkan sejumlah menteri hingga kepala daerah ke KPK. Salah satu yang dilaporkan adalah Ganjar Pranowo.
                Ganjar merespons laporan yang dilakukan Adhie Massardi dan kawan-kawan tersebut. Ganjar Pranowo dilaporkan atas diduga terlibat dalam korupsi e-KTP. 
                Presidium PNPK, Adhie Massardi mengatakan KPK seharusnya dapat menuntaskan semua dugaan tersebut, agar nama-nama pejabat itu jika maju dalam Pilpres 2024 bersih. 
                Nah kami berharap dari kasus-kasus ini sehingga ada sejumlah nama di dalamnya yang kami laporkan itu contoh misalnya kandidat-kandidat yang ramai 
                sekarang ini di pilpres pertama soal Ganjar Pranowo apakah benar dia terlibat e-KTP atau tidak kan ini harus dibahas juga kata Adhie Massardi 
                di Gedung Merah Putih KPK Jakarta Selatan Kamis"
                img1={Avatar}
                img2={Avatar}
            />
        </div>
    )
}

export default HeroProjects;