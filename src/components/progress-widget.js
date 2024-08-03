import styles from "./progress-widget.module.css"

function Widget ({value, color, size, children}) {
    if(value<=0) {
      value = 0;
    } else if (value>=100) {
      value = 100;
    } else if (isNaN(Number(value))) {
      value = 0
      console.error("Parameter is not a number!")
    }
  
    const result = value/4*3;
    return (
        <label className={styles.label} style={{"--size": size}}>{children}<progress className={styles.progress} max={100} value={result} style={{"--progress": `${result}%`, "--gradient": color}}>{result}%</progress></label>
    )
}

export {Widget}