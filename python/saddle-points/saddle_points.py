def saddle_points(matrix):
    if not matrix:
        return []
    row_lens = [len(row) for row in matrix]
    if max(row_lens) != min(row_lens):
        raise ValueError('Invalid matrix')
    points = []
    row_max = [max(row) for row in matrix]
    col_min = [min(col) for col in [[row[i] for row in matrix] for i in range(len(matrix[0]))]]
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            value = matrix[row][col]
            if value == row_max[row] and value == col_min[col]:
                points.append({"row": row + 1, "column": col + 1})
    return points
