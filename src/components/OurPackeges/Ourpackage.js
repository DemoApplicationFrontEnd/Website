import React from "react";
import "./ourPackage.css";
import firstImg from "./../../assets/card1.png";
import Primum from "./../../assets/Primum.png";
import PRM from "./../../assets/PRM.png";
import styles from "./../Login/styles.module.css";
import chevronDown from "./../../assets/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import { Link } from "react-router-dom";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);
const Ourpackage = () => {
  const HandleClicked = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="ourpackage">
        <h1 className="headtext">Pricing Plans</h1>
      </div>

      <div className="packageWrapper">
        <div className="firstBox">
          <img className="firstImg" src={firstImg} alt="Descent Plan" />
          <div className="firstBoxDetails">
            <p
              style={{
                fontSize: "23px",
                color: "#001659",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              Descent
            </p>
            <p>₹1,700/sq.ft</p>
            <p
              style={{ fontSize: "18px", color: "#001659", fontWeight: "bold" }}
            >
              (Incl. GST)
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Accordion>
              <AccordionItem header="Design & Drawings">
                <ul>
                  <li>• 2D Floor Plans</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Civil Construction">
                <ul>
                  <li>• Floor to floor height - 10’ ft</li>
                  <li>• Steel (500 TMT BARS) - Rajuri/Shree</li>
                  <li>• Cement - ACC/Ultratech/Shree</li>
                  <li>• Concrete – M20 Grade</li>
                  <li>• Outer walls - 9” Brick wall</li>
                  <li>• Internal walls - 4” Brick Wall</li>
                  <li>• Plastered internal & external walls</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Architectural Design">
                <ul>
                  <li>• Schedule of openings</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Interior Design">
                <ul>
                  <li>• 2D Furniture layout</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Structural Designing">
                <ul>
                  <li>• Structural Design as per IS Code</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="MEP Designing">
                <ul>
                  <li>• Electrical layout</li>
                  <li>• Plumbing water line layout</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Flooring & Wall Tiling">
                <ul>
                  <li>• Vitrified tiles – Rs 40/- sq.ft</li>
                  <li>• Anti-skid tiles – Rs 35/- sq.ft</li>
                  <li>• Toilet wall tiles (7ft height) – Rs 40/- sq.ft</li>
                  <li>• Kitchen Countertop – Granite Rs 60/- sq.ft</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Painting">
                <ul>
                  <li>
                    • Internal walls & ceiling – 1 coat primer, 2 coat emulsion
                  </li>
                  <li>
                    • External walls – 1 coat primer + 1 coat weatherproof paint
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Electrical Works">
                <ul>
                  <li>• Fireproof wires </li>
                  <li>• Switches - Anchor/GM</li>
                  <li>• External electrification included</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Plumbing">
                <ul>
                  <li>• Class B CPVC pipes – Finolex/Supreme</li>
                  <li>• 1000L PVC overhead tank – Plasto</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Fixtures">
                <ul>
                  <li>• Kitchen sink - SS (Rs 1500/-)</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Doors">
                <ul>
                  <li>• Main Door – Neem wood, Rs 20,000/-</li>
                  <li>• Internal Doors – Flush doors, Rs 8,000/-</li>
                  <li>• Bathroom Doors – PVC, Rs 3,000/-</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Windows">
                <ul>
                  <li>• Aluminium windows with 4mm clear glass</li>
                  <li>• MS Grills as per design</li>
                  <li>• Basic price – Rs 320/- per sq.ft</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Fabrication">
                <ul>
                  <li>• MS Railing for staircase</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Exclusions & Incidentals">
                <ul>
                  <li>• Municipal Corporation fees to be paid by client</li>
                  <li>• Excludes compound wall, electrical fittings</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Payment Structure">
                <ul>
                  <li>
                    • Customized payment schedule based on project
                    specifications
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
          <Link to="/cards" onClick={HandleClicked}>
            <button className="firstBoxBtn">Choose Plan</button>
          </Link>
        </div>
        <div className="firstBox">
          <img className="firstImg" src={Primum} alt="Classic Plan" />
          <div className="firstBoxDetails">
            <p
              style={{
                fontSize: "23px",
                color: "#001659",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              Classic
            </p>
            <p> ₹1,900/sq.ft</p>
            <p
              style={{ fontSize: "18px", color: "#001659", fontWeight: "bold" }}
            >
              (Incl. GST)
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Accordion>
              <AccordionItem header="Design & Drawings">
                <ul>
                  <li>• 2D Floor Plans</li>
                  <li>• 3D Elevation Design</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Civil Construction">
                <ul>
                  <li>• Floor to floor height - 10’6” ft</li>
                  <li>• Steel (500 TMT BARS) - Rajuri/Shree/Metaroll</li>
                  <li>• Cement - ACC/Birla A1/Ultratech/Shree</li>
                  <li>• Concrete – M20 Grade</li>
                  <li>• Outer walls - 9” Laterite stone</li>
                  <li>• Internal walls - 4” Brick Wall</li>
                  <li>• Plastered internal, external, and toilet walls</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Architectural Design">
                <ul>
                  <li>• Working Drawings for all Works</li>
                  <li>• Schedule of openings</li>
                  <li>• Section and Elevation</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Interior Design">
                <ul>
                  <li>• 2D Furniture layout</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Structural Designing">
                <ul>
                  <li>• Structural Design as per IS Code</li>
                  <li>• Good for construction Drawings</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="MEP Designing">
                <ul>
                  <li>•Electrical layout</li>
                  <li>• Plumbing Water line layout</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Flooring & Wall Tiling">
                <ul>
                  <li>• Vitrified tiles – Rs 50/- sq.ft</li>
                  <li>• Anti-skid tiles – Rs 40/- sq.ft</li>
                  <li>• Toilet wall tiles (7ft height) – Rs 45/- sq.ft</li>
                  <li>• Kitchen Countertop – Granite Rs 70/- sq.ft</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Painting">
                <ul>
                  <li>
                    • Internal walls & ceiling – 2 coat putty, 1 coat primer, 2
                    coat emulsion
                  </li>
                  <li>
                    • External walls – 1 coat primer + 2 coats weatherproof
                    paint
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Electrical Works">
                <ul>
                  <li>• Fireproof wires by Finolex</li>
                  <li>• Switches - Anchor/Ziva</li>
                  <li>• External electrification included</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Plumbing">
                <ul>
                  <li>• Class B CPVC pipes – Ashirvad/Supreme</li>
                  <li>• Provision for solar connection & geyser</li>
                  <li>• 1000L PVC overhead tank – Plasto/Ganga</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Fixtures">
                <ul>
                  <li>• Kitchen sink - SS/Granite/Carysil (Rs 2000/-)</li>
                  <li>• Sanitary fixtures: Not Included</li>
                  <li>• Electrical Fixtures: Not Included</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Doors">
                <ul>
                  <li>• Main Door – Teak wood, Rs 30,000/-</li>
                  <li>• Internal Doors – Neem wood, laminated, Rs 10,000/-</li>
                  <li>• Bathroom Doors – Aluminium, Rs 4,000/-</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Windows">
                <ul>
                  <li>• Aluminium windows with 5mm clear glass</li>
                  <li>• MS Grills as per design</li>
                  <li>• Basic price – Rs 380/- per sq.ft</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Fabrication">
                <ul>
                  <li>• MS Railing for staircase</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Exclusions & Incidentals">
                <ul>
                  <li>• Municipal Corporation fees to be paid by client</li>
                  <li>• Plinth level is 3’ above ground</li>
                  <li>• Excludes compound wall, electrical fittings</li>
                </ul>
              </AccordionItem>

              <AccordionItem header="Payment Structure">
                <ul>
                  <li>
                    • Customized payment schedule based on project
                    specifications
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
          <Link to="/cards" onClick={HandleClicked}>
            <button className="firstBoxBtn">Choose Plan</button>
          </Link>
        </div>
        <div className="firstBox">
          <img className="firstImg" src={PRM} alt="#" />
          <div className="firstBoxDetails">
            <p
              style={{
                fontSize: "23px",
                color: "#001659",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              Elegant
            </p>
            <p>₹2,100/sq.ft</p>
            <p
              style={{ fontSize: "18px", color: "#001659", fontWeight: "bold" }}
            >
              (Incl. GST)
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Accordion>
              <AccordionItem header="Design & Drawings">
                <p>• 2D Floor Plans</p>
                <p>• 3D Elevation Design</p>
                <p>• Detailed Working Drawings</p>
              </AccordionItem>

              <AccordionItem header="Civil Construction">
                <p>• Floor to Floor Height - 10’6” ft</p>
                <p>• Steel (500 TMT BARS) - Rajuri/Shree/JSW</p>
                <p>• Cement - ACC/Birla A1/Ultratech/Shree</p>
                <p>• Concrete – M25 Grade for durability</p>
                <p>• External Walls - 9” Laterite Stone</p>
                <p>• Internal Walls - 6” Solid Concrete Blocks</p>
                <p>• Plastered Internal, External & Toilet Walls</p>
              </AccordionItem>

              <AccordionItem header="Architectural Design">
                <p>• Working Drawings for all Works</p>
                <p>• Schedule of Openings</p>
                <p>• Section and Elevation</p>
              </AccordionItem>

              <AccordionItem header="Interior Design">
                <p>• 2D Furniture Layout with Space Optimization</p>
              </AccordionItem>

              <AccordionItem header="Structural Designing">
                <p>• Structural Design as per IS Code</p>
                <p>• Good for Construction Drawings</p>
              </AccordionItem>

              <AccordionItem header="MEP Designing">
                <p>• Electrical Layout with Premium Quality Wiring</p>
                <p>• Plumbing & Water Line Layout</p>
                <p>• Provision for Solar & Geyser Connection</p>
              </AccordionItem>

              <AccordionItem header="Flooring & Wall Tiling">
                <p>
                  • Living, Kitchen, Dining, Bedrooms - Vitrified Tiles
                  ₹60/sq.ft
                </p>
                <p>• Staircase & Foyer - Anti-skid Tiles ₹50/sq.ft</p>
                <p>• Toilet Flooring - Anti-skid Tiles ₹55/sq.ft</p>
                <p>
                  • Toilet Wall Tiles (7ft height) - Highlighting Tiles
                  ₹55/sq.ft
                </p>
                <p>• Parking Area - ₹50/sq.ft</p>
              </AccordionItem>

              <AccordionItem header="Painting">
                <p>
                  • Internal Walls & Ceiling - 2 Coats Putty, 1 Coat Primer, 2
                  Coats Emulsion
                </p>
                <p>
                  • External Walls - 1 Coat Primer, 2 Coats Weatherproof Paint
                </p>
                <p>• Paint Brands - Asian/Berger/Nerolac</p>
              </AccordionItem>

              <AccordionItem header="Electrical">
                <p>• Fireproof Wires - Finolex/Anchor</p>
                <p>• Switches - Anchor Roma/Ziva</p>
                <p>• Concealed Conduits & Copper Wiring</p>
                <p>• DB & MCB - IndoAsian</p>
              </AccordionItem>

              <AccordionItem header="Plumbing">
                <p>• CPVC Pipes - Ashirvad/Supreme</p>
                <p>• Overhead Water Tank - 1000 Liters Plasto/Ganga</p>
              </AccordionItem>

              <AccordionItem header="Fixtures">
                <p>• Kitchen Sink - SS/Granite/Carysil ₹3000</p>
                <p>• Sanitary Fixtures - Premium Quality (Included)</p>
                <p>• Electrical Fixtures - Not Included</p>
              </AccordionItem>

              <AccordionItem header="Doors">
                <p>• Main Door - Teak Wood Frame & Shutters (₹35,000)</p>
                <p>• Internal Doors - Laminated Doors (₹12,000 Each)</p>
                <p>
                  • Bathroom Doors - Aluminium Frame & Shutters (₹5,000 Each)
                </p>
              </AccordionItem>

              <AccordionItem header="Windows">
                <p>• Aluminium Windows with 5mm Toughened Glass</p>
                <p>• MS Grills as per Design (₹400/sq.ft)</p>
              </AccordionItem>

              <AccordionItem header="Fabrication">
                <p>• MS Railing for Staircase</p>
                <p>• Compound Wall - Not Included</p>
              </AccordionItem>

              <AccordionItem header="Exclusions & Incidentals">
                <p>• Any Municipality or Approval Charges</p>
                <p>• Site at Road Level Considered</p>
                <p>• Electrical Fittings Excluded</p>
                <p>• Excludes Pooja Room Chokatt and Door</p>
              </AccordionItem>

              <AccordionItem header="Payment Structure">
                <p>
                  • Customized Payment Schedule Based on Project Specification
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <Link to="/cards" onClick={HandleClicked}>
            <button className="firstBoxBtn">Choose Plan</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ourpackage;
