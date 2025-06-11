const modules = [
  {
    "_id": "M101",
    "name": "Introduction to Rocket Propulsion",
    "description": "Basic principles of rocket propulsion and rocket engines.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L101",
        "name": "History of Rocketry",
        "description": "A brief history of rocketry and space exploration.",
        "module": "M101"
      },
      {
        "_id": "L102",
        "name": "Rocket Propulsion Fundamentals",
        "description": "Basic principles of rocket propulsion.",
        "module": "M101"
      },
      {
        "_id": "L103",
        "name": "Rocket Engine Types",
        "description": "Overview of different types of rocket engines.",
        "module": "M101"
      }
    ]
  },
  {
    "_id": "M102",
    "name": "Fuel and Combustion",
    "description": "Understanding rocket fuel, combustion processes, and efficiency.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L201",
        "name": "Rocket Fuel",
        "description": "Overview of different types of rocket fuels.",
        "module": "M102"
      },
      {
        "_id": "L202",
        "name": "Combustion Processes",
        "description": "Understanding combustion processes and efficiency.",
        "module": "M102"
      },
      {
        "_id": "L203",
        "name": "Combustion Instability",
        "description": "Understanding combustion instability and mitigation.",
        "module": "M102"
      }
    ]
  },
  {
    "_id": "M103",
    "name": "Nozzle Design",
    "description": "Principles of rocket nozzle design and performance optimization.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L301",
        "name": "Nozzle Design",
        "description": "Overview of different types of rocket nozzles.",
        "module": "M103"
      },
      {
        "_id": "L302",
        "name": "Nozzle Performance",
        "description": "Understanding nozzle performance and efficiency.",
        "module": "M103"
      },
      {
        "_id": "L303",
        "name": "Nozzle Optimization",
        "description": "Optimizing nozzle design for specific applications.",
        "module": "M103"
      }
    ]
  },
  {
    "_id": "M201",
    "name": "Fundamentals of Aerodynamics",
    "description": "Basic aerodynamic concepts and fluid dynamics principles.",
    "course": "RS102",
    "lessons": [
      {
        "_id": "L401",
        "name": "Introduction to Fluid Dynamics",
        "description": "Basic principles of fluid flow and aerodynamic forces.",
        "module": "M201"
      },
      {
        "_id": "L402",
        "name": "Bernoulli's Principle",
        "description": "Understanding Bernoulli's equation and its applications.",
        "module": "M201"
      },
      {
        "_id": "L403",
        "name": "Viscous Flow",
        "description": "Study of viscous effects and boundary layers.",
        "module": "M201"
      }
    ]
  },
  {
    "_id": "M202",
    "name": "Subsonic and Supersonic Flow",
    "description": "Understanding subsonic and supersonic aerodynamic behaviors.",
    "course": "RS102",
    "lessons": [
      {
        "_id": "L501",
        "name": "Subsonic Flow Characteristics",
        "description": "Analysis of airflow at speeds below the speed of sound.",
        "module": "M202"
      },
      {
        "_id": "L502",
        "name": "Supersonic Flow Dynamics",
        "description": "Study of supersonic flow and shock wave formation.",
        "module": "M202"
      },
      {
        "_id": "L503",
        "name": "Transonic Effects",
        "description": "Understanding flow behavior near the speed of sound.",
        "module": "M202"
      }
    ]
  },
  {
    "_id": "M203",
    "name": "Aerodynamic Heating",
    "description": "Study of aerodynamic heating and thermal protection systems.",
    "course": "RS102",
    "lessons": [
      {
        "_id": "L601",
        "name": "Heat Transfer Fundamentals",
        "description": "Basic principles of heat transfer in aerodynamic systems.",
        "module": "M203"
      },
      {
        "_id": "L602",
        "name": "Thermal Protection Systems",
        "description": "Design and materials for thermal protection.",
        "module": "M203"
      },
      {
        "_id": "L603",
        "name": "Re-entry Heating Analysis",
        "description": "Study of heating effects during atmospheric re-entry.",
        "module": "M203"
      }
    ]
  },
  {
    "_id": "M301",
    "name": "Spacecraft Structural Design",
    "description": "Fundamentals of designing spacecraft structures and materials selection.",
    "course": "RS103",
    "lessons": [
      {
        "_id": "L701",
        "name": "Structural Analysis",
        "description": "Methods for analyzing spacecraft structural components.",
        "module": "M301"
      },
      {
        "_id": "L702",
        "name": "Materials Selection",
        "description": "Choosing appropriate materials for spacecraft applications.",
        "module": "M301"
      },
      {
        "_id": "L703",
        "name": "Load Analysis",
        "description": "Understanding loads and stresses in spacecraft structures.",
        "module": "M301"
      }
    ]
  },
  {
    "_id": "M302",
    "name": "Orbital Mechanics",
    "description": "Understanding orbital dynamics and mission planning.",
    "course": "RS103",
    "lessons": [
      {
        "_id": "L801",
        "name": "Kepler's Laws",
        "description": "Fundamental laws governing orbital motion.",
        "module": "M302"
      },
      {
        "_id": "L802",
        "name": "Orbital Maneuvers",
        "description": "Planning and executing orbital transfers and maneuvers.",
        "module": "M302"
      },
      {
        "_id": "L803",
        "name": "Mission Design",
        "description": "Comprehensive mission planning and trajectory analysis.",
        "module": "M302"
      }
    ]
  },
  {
    "_id": "M303",
    "name": "Spacecraft Systems Engineering",
    "description": "Overview of spacecraft systems and subsystems engineering.",
    "course": "RS103",
    "lessons": [
      {
        "_id": "L901",
        "name": "Systems Architecture",
        "description": "Design principles for spacecraft system architecture.",
        "module": "M303"
      },
      {
        "_id": "L902",
        "name": "Subsystem Integration",
        "description": "Integration of various spacecraft subsystems.",
        "module": "M303"
      },
      {
        "_id": "L903",
        "name": "System Verification",
        "description": "Testing and verification of spacecraft systems.",
        "module": "M303"
      }
    ]
  },
  {
    "_id": "M401",
    "name": "Organic Molecular Structure",
    "description": "Understanding structure and bonding in organic compounds.",
    "course": "RS104",
    "lessons": [
      {
        "_id": "L1001",
        "name": "Hybridization and Bonding",
        "description": "Orbital hybridization and bonding in organic molecules.",
        "module": "M401"
      },
      {
        "_id": "L1002",
        "name": "Functional Groups",
        "description": "Identification and properties of organic functional groups.",
        "module": "M401"
      },
      {
        "_id": "L1003",
        "name": "Molecular Geometry",
        "description": "Three-dimensional structure of organic molecules.",
        "module": "M401"
      }
    ]
  },
  {
    "_id": "M402",
    "name": "Organic Reactions and Mechanisms",
    "description": "Study of organic reaction mechanisms and synthesis strategies.",
    "course": "RS104",
    "lessons": [
      {
        "_id": "L1101",
        "name": "Nucleophilic Substitution",
        "description": "SN1 and SN2 reaction mechanisms and factors.",
        "module": "M402"
      },
      {
        "_id": "L1102",
        "name": "Elimination Reactions",
        "description": "E1 and E2 elimination mechanisms and selectivity.",
        "module": "M402"
      },
      {
        "_id": "L1103",
        "name": "Addition Reactions",
        "description": "Electrophilic and nucleophilic addition mechanisms.",
        "module": "M402"
      }
    ]
  },
  {
    "_id": "M403",
    "name": "Stereochemistry and Spectroscopy",
    "description": "Three-dimensional chemistry and analytical techniques.",
    "course": "RS104",
    "lessons": [
      {
        "_id": "L1201",
        "name": "Chirality and Stereoisomers",
        "description": "Understanding optical activity and stereoisomerism.",
        "module": "M403"
      },
      {
        "_id": "L1202",
        "name": "NMR Spectroscopy",
        "description": "Nuclear magnetic resonance for structure determination.",
        "module": "M403"
      },
      {
        "_id": "L1203",
        "name": "IR and Mass Spectrometry",
        "description": "Infrared spectroscopy and mass spectrometric analysis.",
        "module": "M403"
      }
    ]
  },
  {
    "_id": "M501",
    "name": "Coordination Chemistry",
    "description": "Study of metal complexes and coordination compounds.",
    "course": "RS105",
    "lessons": [
      {
        "_id": "L1301",
        "name": "Ligand Theory",
        "description": "Understanding ligands and coordination number.",
        "module": "M501"
      },
      {
        "_id": "L1302",
        "name": "Crystal Field Theory",
        "description": "Electronic structure of transition metal complexes.",
        "module": "M501"
      },
      {
        "_id": "L1303",
        "name": "Magnetic Properties",
        "description": "Magnetism in coordination compounds.",
        "module": "M501"
      }
    ]
  },
  {
    "_id": "M502",
    "name": "Solid State Chemistry",
    "description": "Properties and structures of solid inorganic materials.",
    "course": "RS105",
    "lessons": [
      {
        "_id": "L1401",
        "name": "Crystal Structures",
        "description": "Common crystal structures and lattice types.",
        "module": "M502"
      },
      {
        "_id": "L1402",
        "name": "Electronic Properties",
        "description": "Band theory and electronic properties of solids.",
        "module": "M502"
      },
      {
        "_id": "L1403",
        "name": "Defects and Nonstoichiometry",
        "description": "Point defects and their effects on properties.",
        "module": "M502"
      }
    ]
  },
  {
    "_id": "M503",
    "name": "Bioinorganic Chemistry",
    "description": "Role of metals in biological systems and processes.",
    "course": "RS105",
    "lessons": [
      {
        "_id": "L1501",
        "name": "Metalloproteins",
        "description": "Structure and function of metal-containing proteins.",
        "module": "M503"
      },
      {
        "_id": "L1502",
        "name": "Enzyme Catalysis",
        "description": "Metal ions in enzymatic reactions and catalysis.",
        "module": "M503"
      },
      {
        "_id": "L1503",
        "name": "Medical Applications",
        "description": "Inorganic compounds in medicine and therapy.",
        "module": "M503"
      }
    ]
  },
  {
    "_id": "M601",
    "name": "Thermodynamics",
    "description": "Chemical thermodynamics and energy relationships.",
    "course": "RS106",
    "lessons": [
      {
        "_id": "L1601",
        "name": "First Law of Thermodynamics",
        "description": "Energy conservation and enthalpy in chemical systems.",
        "module": "M601"
      },
      {
        "_id": "L1602",
        "name": "Second Law and Entropy",
        "description": "Entropy, spontaneity, and equilibrium.",
        "module": "M601"
      },
      {
        "_id": "L1603",
        "name": "Free Energy and Equilibrium",
        "description": "Gibbs free energy and chemical equilibrium.",
        "module": "M601"
      }
    ]
  },
  {
    "_id": "M602",
    "name": "Chemical Kinetics",
    "description": "Rates of chemical reactions and reaction mechanisms.",
    "course": "RS106",
    "lessons": [
      {
        "_id": "L1701",
        "name": "Rate Laws and Mechanisms",
        "description": "Determining rate laws and elementary reactions.",
        "module": "M602"
      },
      {
        "_id": "L1702",
        "name": "Temperature Effects",
        "description": "Arrhenius equation and activation energy.",
        "module": "M602"
      },
      {
        "_id": "L1703",
        "name": "Catalysis",
        "description": "Homogeneous and heterogeneous catalysis.",
        "module": "M602"
      }
    ]
  },
  {
    "_id": "M603",
    "name": "Quantum Chemistry",
    "description": "Quantum mechanical description of atoms and molecules.",
    "course": "RS106",
    "lessons": [
      {
        "_id": "L1801",
        "name": "Wave Functions",
        "description": "Schrödinger equation and wave function interpretation.",
        "module": "M603"
      },
      {
        "_id": "L1802",
        "name": "Atomic Orbitals",
        "description": "Hydrogen atom and multi-electron atoms.",
        "module": "M603"
      },
      {
        "_id": "L1803",
        "name": "Molecular Orbital Theory",
        "description": "Chemical bonding from quantum mechanical perspective.",
        "module": "M603"
      }
    ]
  },
  {
    "_id": "M701",
    "name": "Elvish Language Fundamentals",
    "description": "Basic grammar and vocabulary of Sindarin and Quenya.",
    "course": "RS107",
    "lessons": [
      {
        "_id": "L1901",
        "name": "Sindarin Grammar",
        "description": "Grammatical structure and syntax of Sindarin.",
        "module": "M701"
      },
      {
        "_id": "L1902",
        "name": "Quenya Fundamentals",
        "description": "High Elvish language structure and vocabulary.",
        "module": "M701"
      },
      {
        "_id": "L1903",
        "name": "Elvish Scripts",
        "description": "Tengwar and other Elvish writing systems.",
        "module": "M701"
      }
    ]
  },
  {
    "_id": "M702",
    "name": "Dwarvish and Other Languages",
    "description": "Study of Khuzdul and other Middle-earth languages.",
    "course": "RS107",
    "lessons": [
      {
        "_id": "L2001",
        "name": "Khuzdul Structure",
        "description": "Grammar and vocabulary of the Dwarvish language.",
        "module": "M702"
      },
      {
        "_id": "L2002",
        "name": "Black Speech",
        "description": "The language of Mordor and its linguistic features.",
        "module": "M702"
      },
      {
        "_id": "L2003",
        "name": "Westron and Common Speech",
        "description": "The common tongue and its regional variations.",
        "module": "M702"
      }
    ]
  },
  {
    "_id": "M703",
    "name": "Historical Linguistics of Middle-earth",
    "description": "Evolution and development of Middle-earth languages.",
    "course": "RS107",
    "lessons": [
      {
        "_id": "L2101",
        "name": "Language Evolution",
        "description": "How languages changed over the Ages of Middle-earth.",
        "module": "M703"
      },
      {
        "_id": "L2102",
        "name": "Philological Methods",
        "description": "Techniques for analyzing ancient texts and inscriptions.",
        "module": "M703"
      },
      {
        "_id": "L2103",
        "name": "Comparative Analysis",
        "description": "Comparing Middle-earth languages with real-world linguistics.",
        "module": "M703"
      }
    ]
  },
  {
    "_id": "M801",
    "name": "Diplomatic Theory in Middle-earth",
    "description": "Principles of diplomacy among different races and cultures.",
    "course": "RS108",
    "lessons": [
      {
        "_id": "L2201",
        "name": "Cultural Understanding",
        "description": "Understanding different races' values and customs.",
        "module": "M801"
      },
      {
        "_id": "L2202",
        "name": "Negotiation Strategies",
        "description": "Effective negotiation techniques in inter-species relations.",
        "module": "M801"
      },
      {
        "_id": "L2203",
        "name": "Conflict Resolution",
        "description": "Methods for resolving disputes between different peoples.",
        "module": "M801"
      }
    ]
  },
  {
    "_id": "M802",
    "name": "Historical Case Studies",
    "description": "Analysis of key diplomatic events in Middle-earth history.",
    "course": "RS108",
    "lessons": [
      {
        "_id": "L2301",
        "name": "The Council of Elrond",
        "description": "Decision-making processes in the Fellowship formation.",
        "module": "M802"
      },
      {
        "_id": "L2302",
        "name": "Alliances in War",
        "description": "Military alliances during the War of the Ring.",
        "module": "M802"
      },
      {
        "_id": "L2303",
        "name": "Post-War Reconstruction",
        "description": "Diplomatic efforts in rebuilding after major conflicts.",
        "module": "M802"
      }
    ]
  },
  {
    "_id": "M803",
    "name": "Leadership and Wisdom",
    "description": "Study of leadership styles and wisdom in governance.",
    "course": "RS108",
    "lessons": [
      {
        "_id": "L2401",
        "name": "Kingly Leadership",
        "description": "Leadership styles of Aragorn and other kings.",
        "module": "M803"
      },
      {
        "_id": "L2402",
        "name": "Wisdom and Counsel",
        "description": "The role of wise counselors like Gandalf and Elrond.",
        "module": "M803"
      },
      {
        "_id": "L2403",
        "name": "Democratic Decision-Making",
        "description": "Collective decision-making in councils and assemblies.",
        "module": "M803"
      }
    ]
  }
];

export function findModules(courseId: string) {
  return modules.filter((m) => m.course === courseId);
}

export function findModuleById(moduleId: string) {
  return modules.find((m) => m._id === moduleId);
}