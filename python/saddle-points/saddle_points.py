def saddle_points(matrix):
    if not matrix:
        return []
    row_lens = {len(row) for row in matrix}
    if len(row_lens) != 1:
        raise ValueError('Invalid matrix')
    row_max = [max(row) for row in matrix]
    col_min = [min(col) for col in [[row[i] for row in matrix] for i in range(len(matrix[0]))]]
    points = []
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            value = matrix[row][col]
            if value == row_max[row] and value == col_min[col]:
                points.append({"row": row + 1, "column": col + 1})
    return points
