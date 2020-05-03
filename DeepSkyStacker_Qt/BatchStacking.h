#ifndef BATCHSTACKING_H
#define BATCHSTACKING_H

#include <QDialog>

namespace Ui {
class BatchStacking;
}

class BatchStacking : public QDialog
{
    Q_OBJECT

public:
    explicit BatchStacking(QWidget *parent = nullptr);
    ~BatchStacking();

private:
    Ui::BatchStacking *ui;
};

#endif // BATCHSTACKING_H
