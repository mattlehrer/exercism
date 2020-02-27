raindrops <- function(number) {
  pling <- if(!(number %% 3)) 'Pling' else ''
  plang <- if(!(number %% 5)) 'Plang' else ''
  plong <- if(!(number %% 7)) 'Plong' else ''
  output <- paste0(pling, plang, plong)
  return (if(output == '') as.character(number) else output)
}
