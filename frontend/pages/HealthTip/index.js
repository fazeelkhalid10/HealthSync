import { useState } from 'react'
import { Search } from 'lucide-react'
import styles from '/styles//Health.module.css'
import healthData from '../../Data/healthData'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HealthTip() {
  const [selectedCondition, setSelectedCondition] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('diet')
  const [showResults, setShowResults] = useState(false)

  const filteredConditions = healthData.filter((condition) =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition)
    setSearchTerm('')
    setShowResults(false)
  }

  const handleSearch = () => {
    setShowResults(true)
  }

  return (
    <div>
        <Header/>
   
    <div className={styles.container}>
     
      <h1 className={styles.title}>Health Tips & Recommendations</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a health condition..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <Search className={styles.searchIcon} />
        </button>
      </div>
      
      {showResults && (
        <ul className={styles.searchResults}>
          {filteredConditions.map((condition) => (
            <li
              key={condition.name}
              onClick={() => handleConditionSelect(condition)}
              className={styles.searchResultItem}
            >
              {condition.name}
            </li>
          ))}
        </ul>
      )}

      {selectedCondition && (
        <div className={styles.conditionCard}>
          <h2 className={styles.conditionTitle}>{selectedCondition.name}</h2>
          <p className={styles.conditionDescription}>{selectedCondition.description}</p>
          
          <div className={styles.tabContainer}>
            {['diet', 'exercise', 'sleep', 'lifestyle'].map((tab) => (
              <button 
                key={tab}
                className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`} 
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div className={styles.tabContent}>
            <h3 className={styles.tabContentTitle}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Recommendations</h3>
            <ul className={styles.recommendationList}>
              {selectedCondition[activeTab].map((item, index) => (
                <li key={index} className={styles.recommendationItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {!selectedCondition && !showResults && (
        <div className={styles.welcomeCard}>
          <h2 className={styles.welcomeTitle}>Welcome to Health Tips</h2>
          <p className={styles.welcomeText}>
            Search for a health condition above to get personalized recommendations for diet, exercise, sleep, and lifestyle changes.
          </p>
        </div>
      )}
     
    </div>
    <Footer />
    
    </div>
  )
}

